from setuptools import setup

setup(
    name="ml",
    version="0.1.0",
    install_requires=["doit", "pandas"],
    packages=["ml"],
    package_data={"ml": ["py.typed"]},
    extras_require={
        "dev": [
            "pytest",
            "black",
            "pytest-cov",
            "pytest-benchmark",
            "pytest-mypy",
            "mypy",
        ]
    },
)
