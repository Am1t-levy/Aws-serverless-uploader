import boto3
import base64
import uuid
import os

s3 = boto3.client('s3')
BUCKET = os.environ['UPLOAD_BUCKET']

def handler(event, context):
    try:
        body = event['body']
        is_base64_encoded = event.get('isBase64Encoded', False)

        if is_base64_encoded:
            binary_data = base64.b64decode(body)
        else:
            binary_data = body.encode('utf-8')

        file_type = event['headers'].get('Content-Type', 'application/octet-stream')
        ext = file_type.split('/')[-1]
        filename = f"{uuid.uuid4()}.{ext}"

        s3.put_object(Bucket=BUCKET, Key=filename, Body=binary_data, ContentType=file_type)

        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json'},
            'body': f'{{"message": "Upload successful", "file": "{filename}"}}'
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': str(e)
        }
