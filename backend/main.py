from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.main_router import  router as user_router
from routers.jwt_router import router as jwt_router
app=FastAPI()

#CORS設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5500"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_router)
app.include_router(jwt_router)

from fastapi.responses import JSONResponse
from pydantic import ValidationError
@app.exception_handler(ValidationError)
async def validation_exception_handler(exc:ValidationError):
    return JSONResponse(
        status_code=422,
        content={
            "detail":exc.errors(),
            "body":exc.model
        }
    )