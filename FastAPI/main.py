from fastapi import FastAPI, Depends, HTTPException, status, Response
from sqlalchemy.orm import Session

from models import Product
from database import engine, Base, get_db
from repositories import ProductRepository
from schemas import ProductRequest, ProductResponse

Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.post("/api/produtos", response_model=ProductResponse, status_code=status.HTTP_201_CREATED)
def create(request: ProductRequest, db: Session = Depends(get_db)):
    product = ProductRepository.save(db, Product(**request.dict()))
    return ProductResponse.from_orm(product)

@app.get("/api/produtos", response_model=list[ProductResponse])
def find_all(db: Session = Depends(get_db)):
    produtos = ProductRepository.find_all(db)
    return [ProductResponse.from_orm(product) for product in produtos]

@app.get("/api/produtos/{id}", response_model=ProductResponse)
def find_by_id(id: int, db: Session = Depends(get_db)):
    product = ProductRepository.find_by_id(db, id)
    if not product:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Product não encontrado"
        )
    return ProductResponse.from_orm(product)

@app.delete("/api/produtos/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_by_id(id: int, db: Session = Depends(get_db)):
    if not ProductRepository.exists_by_id(db, id):
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Product não encontrado"
        )
    ProductRepository.delete_by_id(db, id)
    return Response(status_code=status.HTTP_204_NO_CONTENT)

@app.put("/api/produtos/{id}", response_model=ProductResponse)
def update(id: int, request: ProductRequest, db: Session = Depends(get_db)):
    if not ProductRepository.exists_by_id(db, id):
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Product não encontrado"
        )
    product = ProductRepository.save(db, Product(id=id, **request.dict()))
    return ProductResponse.from_orm(product)