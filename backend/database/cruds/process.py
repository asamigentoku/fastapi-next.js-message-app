from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
import schemas.schema as schema
import database.database_models.models as model

from login_jwt.hashfunction import get_password_hash,verify_password

#ユーザー認証
async def authentication(
    db_session:AsyncSession,
    user_name:str,user_pass:str)->model.User |None:
    result = await db_session.execute(
        select(model.User).where(model.User.user_name==user_name)
    )
    users = result.scalars().all()  # 複数件取得
    for user in users:
        if verify_password(user_pass, user.user_pass):
            print("パスワード一致")
            return user
        print("パスワード不一致")
        print(f"ユーザ名:{user.user_name}")

#新規登録
async def insert_user(
    db_session:AsyncSession,
    user_data:schema.User_Registration_Schema)->model.User:
    #ここでユーザーのパスワードをハッシュ化
    user_data.user_pass=get_password_hash(user_data.user_pass)
    print("ハッシュ化成功")
    new_user=model.User(**user_data.model_dump())
    db_session.add(new_user)
    await db_session.commit()
    await db_session.refresh(new_user)
    print("ユーザー登録完了")
    return new_user

#全件取得
async def get_users(db_session:AsyncSession)->list[model.User]:
    result=await db_session.execute(select(model.User))
    users=result.scalar().all()
    return users

#特定のメモを取得
async def get_user_by_id(db_session:AsyncSession,
                         user_id:int)->model.User | None:
    result=await db_session.execute(
        select(model.User).where(model.User.user_id==user_id)
    )
    user=result.scalar().first()
    return user

#特定のメモを取得
async def get_user_by_name(db_session:AsyncSession,
                         user_name:str)->model.User | None:
    result=await db_session.execute(
        select(model.User).where(model.User.user_name==user_name)
    )
    user=result.scalar().first()
    return user

#更新処理
async def update_user(
    db_session:int,
    user_id:int,
    target_data:schema.User_Registration_Schema)->model.User |None:
    user=await get_user_by_id(db_session,user_id)
    if user:
        user.user_name=target_data.user_name
        user.user_pass=target_data.user_pass
        await db_session.commit()
        await db_session.refresh(user)
    return user

#削除処理
async def delete_user(
    db_session:AsyncSession,
    user_id:int)->model.User |None:
    user=await get_user_by_id(db_session,user_id)
    if user:
        await db_session.delete(user)
        await db_session.commit()
    return user
