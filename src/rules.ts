interface Response {
    weight?: number;
    status?: number;
    file?: string;
    s3File?: string;
    headers?: Record<string, string>;
    body?: Record<string, any>;
    delay?: number;
}

interface Rule {
    name: string;
    expresion: string;
    description?: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    responses: Response[];
}

const rules: Rule[] = [
    {
        "expresion": "fdasgafgdf",
        "name": "partners",
        "description": "Get all partners",
        "method": "GET",
        "responses": [
            {
                "weight": 1,
                "status": 200,
                "delay": 1000,
                "file": "./docs/get/partners.json",
                "s3File": "s3://my-bucket/partners.json",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": {
                    "message": "Hello, world!"
                }
            }
        ]
    }
];

export default rules;