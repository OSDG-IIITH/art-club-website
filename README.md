# Art Society 
Art society was started in the summer of 2017 and hosted its first event in the monsoon 2017.

## How to contribute

### Rules
- No dev PRs against `master` branch. All dev pull requests should be raised against `develop` or custom branches only. 
- `design` branch contains all the design discussions only.
- Every PR needs at least 1 peer approval before it can be merged. 
- Use meaningful commit messages

### Forking the repo
![Fork the repo](images/fork.png)

1. Clone the repo:
```
git clone <url of forked repo>
```

2. Set `upstream`(new remote) to base repo so that you can keep your fork updated:
```
git remote add upstream https://github.com/OSDG-IIITH/art-club-website
```

3. Everytime you want to pull changes from base repo:
```
git pull upstream <branch-name>
```

### Submitting a pull request
- TODO

## Requirements
- TODO

## Instructions to run
- TODO

## Instructions to run
### Activate virtual environment
```bash
cd src
source venv/bin/activate
```

### Generate requirements file
```
pip3 freeze > requirements
```
### Activate server
```bash
python3 manage.py runserver
```

### Backend - Django
#### Migrations 
Every time there is a change in the models, they need to be reflected to the database by running migrations.
```bash
python manage.py makemigrations backend
python manage.py migrate
```
#### Enabling/Disabling browseable API
Uncomment/Comment (respectively) the following lines in `django_react/settings.py`
```python
REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
    )
}
```

### Testing 
Make sure you're in the correct directory:
```bash
cd src
```

Running Tests:
```bash
coverage run --source='.' manage.py test
```
and generate the report:
```bash
coverage html
```
You'll see exactly what to test. If you prefer seeing the report on the command line run:
```bash
coverage report
```
