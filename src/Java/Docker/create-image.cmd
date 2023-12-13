docker build --no-cache -f SQL\Dockerfile.PostgreSql -t zavisimos-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t zavisimos-java/app ../../..
