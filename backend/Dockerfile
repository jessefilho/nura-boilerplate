FROM ruby:3.2.1-bullseye

WORKDIR /app
COPY . .
RUN gem install rails bundler
RUN bundle install

#EXPOSE 3000
COPY docker/app-entrypoint.sh /usr/bin/

# Entrypoint create a executable to run all essencial commands include start the server
ENTRYPOINT ["app-entrypoint.sh"]
#CMD ["rails", "server", "-e", "production", "--log-to-stdout"]
