

/**
 *  RAP NAME GENERATOR
 *  The user will insert their first name and on click receive one of several
 *  possible outputs (i.e. Jill).
 *
 *       "Inspectah Jill"
 *       "J.I.L.L. the Genius"
 *       "Chief Jill the Disciple"
 *       "Jill the Disciple"
 *       "Inspectah J"
 **/

class Generator
{

    constructor()
    {
        /* Name Arrays: Customize names to change possible output */
        this.last_names = ['the Chef', 'Digital', 'Wise', 'Knight', 'Wrecka', 'the Genius', 'the Zoo Keeper', 'the Monk', 'the Scientist', 'the Disciple', 'the Darkman', 'Pellegrino', 'the Ill Figure', 'Rocks The World', 'the Baptist',];
        this.first_names = ['Inspectah', 'Masta', 'Poppa', 'Five Foot', 'Ghostface', 'Old Dirty'];
    }

    generate(enteredValue)
    {
        this.enteredValue = enteredValue;

        if (this.enteredValue.toLowerCase() === "donald glover")
        {
            return "Childish Gambino";
        }

        if (this.verify())
        {
            this.possibleResults = [this.randomFirst(), this.randomLast(), this.lettersLast(), this.randomFirstPlusInitial(), this.randomFirstPlusWordPlusRandomLast()]
            return random_value(this.possibleResults);
        }
        else
        {
            return false;
        }
    }

    verify()
    {
        var validNamePattern = new RegExp("^[A-Za-z.]{1,20}$");
        var result = validNamePattern.test(this.enteredValue);
        return result
    }

    randomFirst()
    {
        return random_value(this.first_names) + " " + this.enteredValue;
    }

    randomLast()
    {
        return this.enteredValue + " " + random_value(this.last_names);
    }

    lettersLast()
    {
        var letters = this.enteredValue.toUpperCase().split("").join(". ") + ".";
        return letters + " " + random_value(this.last_names);
    }

    randomFirstPlusInitial()
    {
        var initial = this.enteredValue[0].toUpperCase();
        return random_value(this.first_names) + " " + initial;
    }

    randomFirstPlusWordPlusRandomLast()
    {
        return random_value(this.first_names) + " " + this.enteredValue + " " + random_value(this.last_names);
    }

}

var random_value = function(items)
{
    return items[Math.floor(Math.random()*items.length)];
}


//Add your codez here


$(document).ready(function() {

    var engine = new Generator;
    engine.generate("Erik");

    var successDomElement = $(".messages").children(".response");
    var errorDomElement = $(".messages").children(".error");

    $("#enter").click(function() {

        successDomElement.hide();
        errorDomElement.hide();

        var firstName = $("#user-input").val();
        var result = engine.generate(firstName);
        if (result)
        {
            successDomElement.html(result);
            successDomElement.show();
        }
        else
        {
            errorMessage = "Please enter only letters with length 1-20."
            errorDomElement.html(errorMessage)
            errorDomElement.show();
        }
    });

});
