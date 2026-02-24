from fastapi import APIRouter,HTTPException,Depends,Form
from sqlalchemy.ext.asyncio import AsyncSession
from database.schemas.schema import User_Registration_Schema,User_Information_Schema,ResponseSchema
import database.cruds.process as process

import database.db as db

router=APIRouter(tags=["Users"],prefix="")

#ユーザー認証
@router.post("/login",response_model=ResponseSchema)
async def login(data:User_Registration_Schema,db:AsyncSession=Depends(db.get_dbsession)):
    user=await process.authentication(db,data)
    if not user:
        raise HTTPException(status_code=404,detail="ユーザー名またはパスワード名が違います")
    print("ログイン完了")
    return ResponseSchema(message="login success")

#登録
@router.post("/register",response_model=ResponseSchema)
async def create_user(user:User_Registration_Schema,db:AsyncSession=Depends(db.get_dbsession)):
    try:
        print("ここまで到達")
        await process.insert_user(db,user)
        return ResponseSchema(message="registerd")
    except Exception as e:
        raise HTTPException(status_code=404,detail="ユーザーの登録に失敗しました")
    
#全ユーザー取得
@router.get("/login",response_model=list[User_Information_Schema])
async def get_users_list(db:AsyncSession=Depends(db.get_dbsession)):
    users=await process.get_users(db)
    return users

#特定のユーザの取得
@router.get("/login/{user_id}",response_model=User_Information_Schema)
async def get_user_datail(user_id:int,
                          db:AsyncSession=Depends(db.get_dbsession)):
    user=await process.get_user_by_id(db,user_id)
    if not user:
        raise HTTPException(status_code=404,datail="ユーザーが見つかりません")
    return user

#ユーザーの更新
@router.put("/login/{user_id}",response_model=ResponseSchema)
async def modify_user(user_id:int,user:User_Registration_Schema,
                      db:AsyncSession=Depends(db.get_dbsession)):
    updated_user=await process.update_user(db,user_id,user)
    if not updated_user:
        raise HTTPException(status_code=404,detail="更新対象が見つかりません")
    return ResponseSchema(message="メモが正常に更新されました")

#削除処理
@router.delete("/login/{user_id}",response_model=ResponseSchema)
async def remove_user(user_id:int,
                      db:AsyncSession=Depends(db.get_dbsession)):
    result=await process.delete_user(db,user_id)
    if not result:
        raise HTTPException(status_code=404,detail="削除対象が見つかりません")
    return ResponseSchema(message="メモが正常に削除されました")