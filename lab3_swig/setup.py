from distutils.core import setup, Extension

name = "hw"
version = "1.0"

setup(name=name, version=version,
      ext_modules=[Extension(name='_hw',
             sources=["hw.i", "src/hw.c"],
             include_dirs=['src'])
    ])