curl --include --request PATCH "http://localhost:4741/patients/${ID}" \
  --header "Content-Type: application/json" \
  --data '{
      "patient": {
        "screen_name": "'"${SCREEN_NAME}"'"
      }
  }'