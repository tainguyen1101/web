function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6jKiJXHAf0L":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var RoundedSCORE = player.GetVar("Score");
player.SetVar("Score", Math.round(RoundedSCORE));
}

