import os
from sqlalchemy.ext.asyncio import create_async_engine
from .database_models.models import Base
import asyncio


#データベースのURL ファイル名とパスをjoinで繋ぐ
DATABASE_URL="postgresql+asyncpg://user:password@localhost:5432/testdb"

#非同期データベースエンジンの作成
engine=create_async_engine(DATABASE_URL,echo=True)

#データベースの初期化
async def init_db():
    print("データベースの初期化を開始")
    async with engine.begin() as conn:
        #既存のテーブルの削除
        await conn.run_sync(Base.metadata.drop_all)
        print(">>>既存のテーブルを削除しました")
        #テーブルの作成
        await conn.run_sync(Base.metadata.create_all)
        print("新しいテーブルを作成しました。")

#スクリプトで実行時のみ実行
if __name__=="__main__":
    asyncio.run(init_db())
        