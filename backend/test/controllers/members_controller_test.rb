require "test_helper"

class MembersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @member = members(:one)
  end

  test "should get index" do
    get members_url, as: :json
    assert_response :success
  end

  test "should create member" do
    assert_difference("Member.count") do
      post members_url, params: { member: { group_owner: @member.group_owner, main: @member.main } }, as: :json
    end

    assert_response :created
  end

  test "should show member" do
    get member_url(@member), as: :json
    assert_response :success
  end

  test "should update member" do
    patch member_url(@member), params: { member: { group_owner: @member.group_owner, main: @member.main } }, as: :json
    assert_response :success
  end

  test "should destroy member" do
    assert_difference("Member.count", -1) do
      delete member_url(@member), as: :json
    end

    assert_response :no_content
  end
end
