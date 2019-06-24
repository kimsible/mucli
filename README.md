# mucli

Small Command Line Interface manager for mu* APIs

Generate an **API access key** :
```bash

mu key

> KEY : rltZ/0p/1sdQp+P2wBd9u9iZh97bn9dg
```

### muletter

Export emails :
```bash
mu letter --key=authorization-key --url=server-url export

> user1@provider.com
  user2@provider.com
  user3@provider.com
  ...
```

Export emails with IDs :
```bash
mu letter --verbose --key=authorization-key --url=server-url export
```
```json
{
  {
    "email": "user1@provider.com",
    "_id": "857XlEj1N8FHhXky"
  },
  {
    "email": "user1@provider.com",
    "_id": "7XlEky885j1NXFHh"
  },
  {
    "email": "user3@provider.com",
    "_id": "NHhky8XF857XlEj1"
  },
  ...
}
```
