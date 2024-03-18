"client side"

import ProductsClient from "./components/client";

function DashboardPage() {


    return (
        <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          {/* <ProductsClient data={formattedProducts} /> */}
          <ProductsClient/>

        </div>
      </div>
    );
}

export default DashboardPage;