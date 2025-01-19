export const environment = {
    development: false,
    certification: false,
    production: true,
    apiUrl: 'https://api-prod.example.com', 
    headers: {
        'UNICA-ServiceId': 'prod-service-id',
        'UNICA-Application': 'prod-application',
        'UNICA-PID': 'prod-pid',
        'Ocp-Apim-Subscription-Key': 'prod-subscription-key',
        'Authorization': 'Bearer prod-token',
    }
};