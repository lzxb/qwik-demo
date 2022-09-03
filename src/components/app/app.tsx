import { component$, useStylesScoped$ } from '@builder.io/qwik';

export const App = component$(() => {
  useStylesScoped$(`
    .text {
      font-size: 16px;
      color: red;
    }`);
  return (
    <div>
      <p class="text">Hello world</p>
    </div>
  );
});
