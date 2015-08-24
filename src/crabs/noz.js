

CA.mod('card').controller(function ($state)
{
   $state.list = getInputs().all();
   return $state.validate();
});
