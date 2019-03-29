update inventory
set image_url = $2
set product_name = $3
set price = $4
where product_id = $1
