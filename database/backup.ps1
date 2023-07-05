echo "Iniciando copia de seguridad"

rm create-db.sql
rm insert-db.sql

$dire =  $(get-location).Path;

echo "Almacenando script de creación de tablas"
cd C:\'Program Files'\MySQL\'MySQL Server 8.0'\bin

.\mysqldump -v --opt --no-data --skip-triggers --default-character-set=utf8 -u root -p agencia > create-db.sql
mv create-db.sql $dire

echo "Almacenando script de inserción de datos"
.\mysqldump -v --opt --no-create-info --skip-triggers --default-character-set=utf8 -u root -p agencia > insert-db.sql
mv insert-db.sql $dire

echo "Fin"

cd $dire