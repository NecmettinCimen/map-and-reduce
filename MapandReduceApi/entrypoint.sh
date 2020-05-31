#!/bin/bash

set -e
run_cmd="dotnet run --server.urls http://*:80"

until dotnet tool install --global dotnet-ef; do
>&2 echo "dotnet tool install --global dotnet-ef"
sleep 1
done

until export PATH="$PATH:/root/.dotnet/tools" do
>&2 echo "export part"
sleep 1
done

until dotnet ef database update; do
>&2 echo "SQL Server is starting up"
sleep 1
done

>&2 echo "SQL Server is up - executing command"
exec $run_cmd