#!/bin/bash
set -e

RAILS_ENV=production

# Remove a potentially pre-existing server.pid for Rails.
echo "Deleting server.pid file..."
if [ -f /app/tmp/pids/server.pid ]; then
  rm /app/tmp/pids/server.pid
fi

# Check migration status, if it contains changes then dumbs data
# before its application
# Set environment to production the exec settings

# If the database exists, migrate. Otherwise setup (create and migrate)
echo "Running database migrations..."

# todo: run it for staging propose
# RAILS_ENV=production bundle exec rake db:drop db:create db:migrate db:seed
# RAILS_ENV=production bundle exec rake db:drop db:create db:migrate db:seed
# run it after to do a dump
bundle exec rake db:migrate
# todo: a self verification when and how run migrate command
# bundle exec rails db:migrate 2>/dev/null || RAILS_ENV=production bundle exec rails db:drop db:create db:migrate db:seed
echo "Finished running database migrations."

# Start the server.
echo "Starting rails server... mode " + $RAILS_ENV
bundle exec rails server -e production --log-to-stdout

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
