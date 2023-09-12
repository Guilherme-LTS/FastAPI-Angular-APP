from sqlalchemy import Column, Integer, String, Float

from database import Base

class Product(Base):
    __tablename__ = "products"

    id: int = Column(Integer, primary_key=True, index=True)
    descricao: str = Column(String(255), nullable=False)
    valor: float = Column(Float, nullable=False)
    categoria: str = Column(String(100), nullable=False)
    estoque: int = Column(Integer, nullable=False)
