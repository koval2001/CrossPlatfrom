#include "Python/Python.h"
#include "src/hw.h"

static PyObject *_wrap_hw1(PyObject *self, PyObject *args) {
  PyObject *resultobj;
  double r1, r2, result;

  PyArg_ParseTuple(args, (char *)"dd:hw1", &r1, &r2);

  hw1(r1, r2, &result);

  resultobj = PyFloat_FromDouble(result);
  return resultobj;
}

static PyMethodDef HwMethods[] = {
    {"hw1", _wrap_hw1, METH_VARARGS, "Hello world."},
    {NULL, NULL, 0, NULL}
};

static struct PyModuleDef hwmodule = {
   PyModuleDef_HEAD_INIT,
   "hw",
   NULL,
   -1,
   HwMethods
};


PyMODINIT_FUNC PyInit_hw()
{
    return PyModule_Create(&hwmodule);
}