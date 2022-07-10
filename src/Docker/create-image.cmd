docker build --no-cache -f SQL\Dockerfile.PostgreSql -t iss5/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t iss5/app ../..
