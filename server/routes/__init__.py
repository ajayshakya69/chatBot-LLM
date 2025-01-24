from .auth import auth


def init_routes(app):
    app.register_blueprint(auth, url_prefix="/api/auth")
