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
        "expresion": ".*/unit/[0-9]+/partner/[0-9]+/slot/.+",
        "name": "get-unit-partner-slot",
        "method": "GET",
        "responses": [
            {
                "weight": 1,
                "status": 200,
                "delay": 1000,
                "file": "./get/slot-unit.json",
            }
        ]
    },
    {
        "expresion": ".*/unit/[0-9]+/partner/[0-9]+/slot/.+",
        "name": "put-unit-partner-slot",
        "method": "PUT",
        "responses": [
            {
                "weight": 1,
                "status": 200,
                "delay": 1000,
                "body": {
                    "type": "info",
                    "message": "",
                    "data": {
                        "header_unit_id": 535,
                        "header_partner_id": 798,
                        "formButton": {
                            "requestMethod": "PUT",
                            "api": "/api/ui-schemas/collegeconfidential/slot/22688/unit/535/partner/798"
                        },
                        "slot_id": "abc",
                        "enabled": true
                    }
                }
            }
        ]
    }
];

export default rules;