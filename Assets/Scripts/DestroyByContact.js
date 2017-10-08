public class DestroyByContact extends MonoBehaviour {
	public var explosion:GameObject;
	public var score:int;
	private var gameController:GameController;
	function Start(){
		var gameControllerObject:GameObject = GameObject.FindWithTag("GameController");
		if(gameControllerObject != null) {
			gameController = gameControllerObject.GetComponent.<GameController>();
		}else{
			Debug.Log("Cannot find 'GameController' script");
		}
	}
	function OnTriggerEnter(other:Collider):void {
		if(other.tag == "Bolt") {
			Instantiate (explosion, transform.position, transform.rotation);
			gameController.AddScore(score);
			gameController.AddStreak();
			Destroy (other.gameObject);
			Destroy(gameObject);

		}
	}

}
