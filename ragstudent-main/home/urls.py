from django.urls import path
from .import views

urlpatterns = [
    path('newhome/',views.Home.as_view(),name="newhome"),
    path('Staff/',views.Staffs.as_view(),name="staff"),
    path('Student/',views.Student.as_view(),name="student"),
    path('Enquiry/',views.Enquiry.as_view(),name="enquiry"),
    path('form/',views.Form.as_view(),name="form"),
    path('edit/',views.Edit.as_view(),name="edit"),
    path('delete/',views.Delete.as_view(),name="delete"),
    path('profile/',views.Profile.as_view(),name="profile"),
    path('editprofile/',views.Editprofile.as_view(),name="editprofile"),
]