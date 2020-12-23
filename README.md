# GitBuilder Templates API
This project is designed to assist the [gitbuilder-io](https://github.com/SystemFiles/gitbuilder-io) project in listing approved provided templates for projects as well as providing data stream for each project to be downloaded to the client PC after call is made to the template endpoint.
The API also allows some authenticated users to upload approved project templates via the API or **Gitbuilder-io CLI** providing their valid OAuth2.0 token.

## Usage

### Uploading a template
**note:** maxiumum upload size through API is 50MB

```bash
curl --location --request POST 'https://gb.sykesdev.ca/api/template?lang=<LANGUAGE>' \
--header 'Authorization: Bearer <YOUR_API_TOKEN>' \
--form 'files=@path/to/project/template/template.zip'
```

### Get list of available templates

```bash
curl --location --request GET 'https://gb.sykesdev.ca/api/template?lang=<LANGUAGE>'
```

### Get template filestream

```bash
curl --location --request GET 'https://gb.sykesdev.ca/api/template?name=<TEMPLATE_NAME>&lang=<LANGUAGE>'
```
