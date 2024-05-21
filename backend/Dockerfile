FROM python:3.9-slim

ENV PYTHONUNBUFFERED 1

WORKDIR /app

RUN pip install pipenv

COPY Pipfile Pipfile.lock /app/

RUN pipenv install --deploy --system

COPY . /app/

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "myproject.wsgi:application"]
