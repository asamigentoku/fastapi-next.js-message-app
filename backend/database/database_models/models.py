from sqlalchemy import Column,Integer,String
#最初のデータベース追加の時にBaseモデルを設定しそれをインストールする
from database.db import Base
class User(Base):
    __tablename__="usertable"
    user_id=Column(Integer,primary_key=True,autoincrement=True)
    user_name=Column(String,nullable=True)
    user_pass=Column(String,nullable=True)