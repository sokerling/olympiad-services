FROM mcr.microsoft.com/dotnet/sdk:10.0.403 AS build
WORKDIR /source
COPY global.json Directory.Build.props ./
COPY src/TasksPrinting/ ./src/TasksPrinting/
RUN dotnet publish src/TasksPrinting/TasksPrinting.Api/TasksPrinting.Api.csproj -c Release -o /app

FROM mcr.microsoft.com/dotnet/aspnet:10.0.14
WORKDIR /app
COPY --from=build /app .
USER $APP_UID
EXPOSE 8080
ENTRYPOINT ["dotnet", "TasksPrinting.Api.dll"]
