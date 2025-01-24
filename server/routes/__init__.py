from .user import user


def init_routes(app):
    app.register_blueprint(user, url_prefix="/users")
