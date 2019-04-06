class Api::ProductsController < ProductsController
    def index
      render json: Product.all
    end
  
    def create
      product = Product.new(product_params)
      if product.save
        render json: product
      else
        render json: { errors: product.errors }, status: :unprocessable_entity
      end
    end
  
    def update
      product = Product.find()params[:id]
      # product.update( ) !product.complete )
      render json: product
    end
  
    def destroy  
      Product.find(params[:id]).destroy
      render json: { message: 'Product deleted' }
    end
  
    private
      def  product_params
        params.require(:product).permit(:name, :description, :price, :stock)
      end
  
  
  end
  