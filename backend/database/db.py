import os
#データベースの非同期処理
from sqlalchemy.ext.asyncio import create_async_engine,AsyncSession
from sqlalchemy.orm import sessionmaker,declarative_base

Base=declarative_base()

#DBファイルの作成、まずこのファイル自体のパスを取得
DATABASE_URL = os.getenv("DATABASE_URL")

#非同期データベースエンジンの作成
engine=create_async_engine(DATABASE_URL,echo=True)

#非同期セッションの設定(エンジンのセッションを設定する感じ)
async_session=sessionmaker(
    engine,
    expire_on_commit=False,
    class_=AsyncSession
)

async def get_dbsession():
    async with async_session() as session:
        yield session