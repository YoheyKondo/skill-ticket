class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    added_attrs = [:email, :password ]
    devise_parameter_sanitizer.permit(:sign_up, keys: [:added_attrs]) # 新規登録時(sign_up時)にnameというキーのパラメーターを追加で許可する
  end

end
