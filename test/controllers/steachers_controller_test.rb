require 'test_helper'

class SteachersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get steachers_index_url
    assert_response :success
  end

end
