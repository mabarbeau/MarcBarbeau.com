<template>
    <form class="grid" action="#" method="post">
        <form class="grid__inner" action="" method="post">
    		<div class="grid__cell--span-3">
    			<label class="shown" for="firstname">First name</label>
    			<input id="firstname" placeholder="First Name" class="form-control" name="firstname" type="text">
    		</div>
    		<div class="grid__cell--span-3">
    			<label for="firstname">Last name</label>
    			<input id="firstname" placeholder="Last Name" class="form-control" name="lastname" type="text">
    		</div>
    		<div class="grid__cell--span-3">
    			<div class="select">
    				<label class="shown" for="firstname">Select</label>
    				<select class="form-control" name="cars">
    					<option value="volvo">Volvo</option>
    					<option value="saab">Saab</option>
    					<option value="fiat">Fiat</option>
    					<option value="audi">Audi</option>
    				</select>
    			</div>
    		</div>
    		<div class="grid__cell--span-3">
    			<div class="select select-multiple">
    				<label class="shown" for="firstname">Select Multiple</label>
    				<select class="form-control" name="cars" size="1">
    					<option selected value="volvo">Select Multiple</option>
    					<option disabled value="volvo">Volvo</option>
    					<option disabled value="saab">Saab</option>
    					<option value="fiat">Fiat</option>
    					<option value="audi">Audi</option>
    				</select>
    				<ul>
    					<li><input type="hidden" name="cars[]" value="Volvo">Volvo<i class="material-icons">clear</i></li>
    					<li><input type="hidden" name="cars[]" value="Saab">Saab<i class="material-icons">clear</i></li>
    				</ul>
    			</div>
    		</div>
    		<div class="grid__cell--span-6">
    			<label class="shown" for="firstname">Textarea</label>
    			<textarea class="form-control" placeholder="Textarea" name="message" rows="4"></textarea>
    		</div>
    	</form>
    </form>
</template>

<script>
export default {
    name:'TheContactForm'
}
</script>

<style lang="scss" scoped>
</style>
