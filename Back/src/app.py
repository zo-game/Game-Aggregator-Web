from fastapi import FastAPI

import api


tags_metadata = [
    {
        'name': 'auth',
        'description': 'Авторизация и регистрация',
    },
]

app = FastAPI(
    title='Accountr',
    description='Сервис для геймеров',
    version='1.0.0',
    openapi_tags=tags_metadata,
)

app.include_router(api.router)