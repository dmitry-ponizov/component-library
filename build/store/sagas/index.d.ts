export default function root(): Generator<
  import('redux-saga/effects').AllEffect<import('redux-saga/effects').ForkEffect<never>>,
  void,
  unknown
>
