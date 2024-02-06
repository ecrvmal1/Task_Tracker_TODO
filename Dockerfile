from python:3.8.6
# from python:3.7.14

RUN apt-get update \
&& apt-get install -y postgresql postgresql-contrib libpq-dev python3-dev

RUN pip3 install --upgrade pip --timeout 10000 scikit-learn

COPY ./todolist/ ./
RUN pip3 install -r requirements.txt

COPY wait-for-postgres.sh ./
RUN chmod +x wait-for-postgres.sh
RUN pip3 install gunicorn
