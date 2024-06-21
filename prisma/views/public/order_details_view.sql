SELECT
  o.order_id,
  o.order_date,
  o.customer_id,
  od.order_detail_id,
  c.customer_name,
  p.product_id,
  od.quantity,
  p.product_name,
  p.category_id,
  p.unit,
  p.price,
  c.contact_name,
  c.address,
  c.city,
  c.postal_code,
  c.country
FROM
  (
    (
      (
        orders o
        JOIN order_details od ON ((o.order_id = od.order_id))
      )
      JOIN products p ON ((od.product_id = p.product_id))
    )
    JOIN customers c ON ((o.customer_id = c.customer_id))
  );