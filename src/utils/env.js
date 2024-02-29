
let baseUrl='';
let routerMode='hash';

if(process.env.NODE_ENV=='development'){
    baseUrl='http://localhost:8000';
}

export {
    baseUrl,
    routerMode,
}