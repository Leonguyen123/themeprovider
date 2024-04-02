import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      expect(service.getData()).toEqual({ message: 'Hello API' });
    });
  });
});


const x = {
  "shopee": [
      "v2.order.get_order_list",
      "v2.logistics.create_shipping_document",
      "v2.logistics.download_shipping_document",
      "v2.logistics.get_address_list",
      "v2.logistics.get_shipping_parameter",
      "v2.logistics.get_shipping_document_result",
      "v2.logistics.get_tracking_number",
      "v2.logistics.ship_order",
      "v2.order.get_order_detail",
      "v2.order.get_shipment_list",
      "v2.product.get_item_base_info",
      "v2.product.get_item_list",
      "v2.product.get_model_list",
      "v2.product.update_stock",
      "v2.shop.get_shop_info",
      "v2.shop.get_warehouse_detail"
  ],
  "lazada": [
      "ConfirmDeliveryForDBS",
      "FailedDeliveryForDBS",
      "GetShipmentProvider",
      "Pack",
      "PrintAWB",
      "ReadyToShip",
      "RecreatePackage",
      "GetShipmentProviders",
      "GetOrderItems",
      "GetOrder",
      "GetOrders",
      "SetInvoiceNumber",
      "GetProductItem",
      "GetProducts",
      "UpdateSellableQuantity",
      "GetSeller"
  ],
  "tiktok": [
      "auth.get_token",
      "auth.refresh_token",
      "fulfillment.get_package_detail",
      "fulfillment.get_package_pickup_config",
      "fulfillment.get_package_shipping_document",
      "fulfillment.get_package_shipping_info",
      "fulfillment.ship_package",
      "fulfillment.update_package_shipping_info",
      "logistics.get_shipping_label",
      "logistics.get-shipping-info",
      "logistics.get_shipping_provider",
      "logistics.get_subscribed_delivery_options",
      "logistics.get_warehouse_list",
      "logistics.update_shipping_info",
      "order.get_order_detail",
      "order.get_order_list",
      "product.get_product_detail",
      "product.get_product_list",
      "product.update_stock",
      "reverse.confirm-reverse",
      "reverse.get-reverse-order-list",
      "seller.get_active_shops",
      "shop.get_authorized_shop",
      "supply-chain.package-shipment-confirmation"
  ],
  "shopify": [
    "shopify.access_scopes.request",
    "shopify.fulfillment.orders",
    "shopify.fulfillment.create",
    "shopify.setstock",
    "shopify.location",
    "shopify.inventory.list.levels",
    "shopify.locations",
    "shopify.order",
    "shopify.orders",
    "shopify.products.ids",
    "shopify.products"
  ],
  "qoo10": [
    "GetAllGoodsInfo",
    "ShippingBasic.GetClaimInfo_v2",
    "ShippingBasic.GetDeliveryCompanyInfo",
    "ItemsLookup.GetGoodsInventoryInfo",
    "ItemsLookup.GetItemDetailInfo",
    "ShippingBasic.GetShippingAndClaimInfoByOrderNo",
    "ShippingBasic.GetShippingInfo_v2",
    "ShippingBasic.PrintQxpressInvoice",
    "ItemsOrder.SetGoodsPriceQty",
    "ShippingBasic.SetSellerCheckYN_V2",
    "admin/api/2023-04/products.json",
    "ShippingBasic.SetSendingInfo",
    "ItemsOptions.UpdateInventoryQtyUnit"
  ],
  "zalora": [
    "order.export_document",
    "order.generate_invoice_number",
    "order.get_order_detail",
    "order.get_order_list",
    "order.get_shipment_providers",
    "order.pickup_requests",
    "order.set_invoice_number",
    "order.set_to_delivered",
    "order.set_to_packed",
    "order.set_to_ready_to_ship",
    "order.set_to_shipped",
    "product_set.get_product_set_list",
    "product_set.get_stock",
    "product.get_product_list",
    "product.get_stock",
    "product.update_stock",
    "seller.get_seller_detail",
    "system.health",
    "user.get_user_list"
  ]
}

  const y = {
    "shopee": [
        "/api/v2/order/get_order_detail",
        "/api/v2/order/get_order_list",
        "/api/v2/logistics/create_shipping_document",
        "/api/v2/logistics/get_shipping_parameter",
        "/api/v2/logistics/download_shipping_document",
        "/api/v2/logistics/get_address_list",
        "/api/v2/logistics/get_shipping_document_result",
        "/api/v2/logistics/get_tracking_number",
        "/api/v2/logistics/ship_order",
        "/api/v2/order/get_shipment_list",
        "/api/v2/product/get_item_base_info",
        "/api/v2/product/get_item_list",
        "/api/v2/product/get_model_list",
        "/api/v2/product/update_stock",
        "/api/v2/shop/get_shop_info",
        "/api/v2/shop/get_warehouse_detail"
    ],
    "lazada": [
        "/order/package/sof/delivered",
        "/order/package/sof/failed_delivery",
        "/order/shipment/providers/get",
        "/order/fulfill/pack",
        "/order/package/document/get",
        "/order/package/rts",
        "/order/package/repack",
        "/shipment/providers/get",
        "/order/items/get",
        "/order/get",
        "/orders/get",
        "/order/invoice_number/set",
        "/product/item/get",
        "/products/get",
        "/product/stock/sellable/update",
        "/seller/get"
    ],
    "tiktok": [
        "/api/v2/token/get",
        "/api/v2/token/refresh",
        "/api/fulfillment/detail",
        "/api/fulfillment/package_pickup_config/list",
        "/api/fulfillment/shipping_document",
        "/api/fulfillment/shipping_info",
        "/api/fulfillment/rts",
        "/api/fulfillment/shipping_info/update",
        "/api/logistics/shipping_document",
        "/api/logistics/ship/get",
        "/api/logistics/shipping_providers",
        "/api/logistics/get_subscribed_deliveryoptions",
        "/api/logistics/get_warehouse_list",
        "/api/logistics/tracking",
        "/api/orders/detail/query",
        "/api/orders/search",
        "/api/products/details",
        "/api/products/search",
        "/api/products/stocks",
        "/api/reverse/reverse_request/confirm",
        "/api/reverse/reverse_order/list",
        "/api/seller/global/active_shops",
        "/api/shop/get_authorized_shop",
        "/api/supply_chain/package_shipment_confirmation",
    ],
    "shopify": [
      "/admin/oauth/access_scopes.json",
      "admin/api/2023-04/orders/orderId/fulfillment_orders.json",
      "admin/api/2023-04/fulfillments.json",
      "admin/api/2023-04/inventory_levels/set.json",
      "admin/api/2023-04/inventory_levels/connect.json",
      "admin/api/2023-04/inventory_levels.json",
      "admin/api/2023-04/locations.json",
      "/admin/api/2023-04/orders/orderId.json",
      "/admin/api/2023-04/orders.json",
      "admin/api/2023-04/products.json",
      "admin/api/2023-04/products.json"
    ],
    "zalora": [
      "/v2/orders/export-document",
      "/v2/users",
      "/v2/health",
      "/v2/seller",
      "/v2/stock/product",
      "/v2/orders/statuses/set-to-shipped",
      "/v2/orders/statuses/set-to-ready-to-ship",
      "/v2/orders/statuses/set-to-packed-by-marketplace",
      "/v2/orders/statuses/set-to-delivered",
      "/v2/orders/set-invoice-number",
      "/v2/order-pickup-requests",
      "/v2/orders-shipment-providers",
      "/oauth/client-credentials"
    ]
}