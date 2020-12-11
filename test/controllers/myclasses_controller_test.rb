require 'test_helper'

class MyclassesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get myclasses_index_url
    assert_response :success
  end

end
