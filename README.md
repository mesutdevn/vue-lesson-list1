# vue-lesson-list1
Vue ile Listeleme ve Components

Foursquare Api kullanılarak girilen kordinatın 500 metre çevresindeki restoranların 10 tanesini listeleyen api servisinden dataları çekmektedir.

Çekilen datanın mekana ait fotoğrafları gösterilmektedir.

Gösterilen datalar;
Sol kısımda Google maps üzerinden kordinatı,
Map'in hemen yanına Mekanın adı,
Sonrasında il ve ilçe bilgileri,
Test amaçlı Venue ID bilgiside eklenmiştir.
Hemen altına ise mekanın fotoğrafları yan yana eklenmiştir.

Not: api sınırlı data çekmeye izin verdiğinden kota aşıldı uyarısı vermektedir.

Kota aşıldı uyarısı;

{
meta: {
code: 429,
errorType: "quota_exceeded",
errorDetail: "Quota exceeded",
requestId: "5db8e93fcc7d41002b8aa6bd"
},
response: { }
}


https://api.foursquare.com/v2
