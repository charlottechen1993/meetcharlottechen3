from rest_framework.routers import DefaultRouter
from .api import ProjectViewSet

router = DefaultRouter()
router.register('api/projects', ProjectViewSet, 'projects')

urlpatterns = router.urls