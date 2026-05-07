// ===============================================
// TAREA 4 - CONSULTAS MONGODB
// Big Data - UNAD 2026
// ===============================================

use ecommerce_unad;

// === CONSULTAS BÁSICAS ===
db.productos.insertOne({nombre: "Producto prueba", precio: 99999});
db.productos.find({categoria: "Ropa"}).limit(5).pretty();
db.productos.updateOne({nombre: "Producto 1 - Básico"}, {$set: {descuento: 40}});
db.productos.deleteOne({nombre: "Producto 100 - Premium"});

// === FILTROS ===
db.productos.find({precio: {$gt: 200000}}).count();
db.productos.find({marca: {$in: ["Nike","Adidas"]}}).limit(3).pretty();
db.productos.find({"variantes.color": "Negro"}).limit(3).pretty();

// === AGREGACIÓN ===
db.productos.aggregate([
  {$group: {
    _id: "$categoria",
    total_ventas: {$sum: "$ventas_totales"},
    avg_rating: {$avg: "$rating_promedio"},
    productos: {$sum: 1}
  }},
  {$sort: {total_ventas: -1}}
]).pretty();

db.productos.aggregate([
  {$unwind: "$reseñas"},
  {$group: {_id: null, rating_general: {$avg: "$reseñas.puntuacion"}}}
]).pretty();
