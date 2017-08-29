require 'json'
require 'pry'

file = File.read('operations.json')
operations = JSON.parse(file)

operations.each do |operation|
  group = ''
  subgroup = ''
  operation['categories'].each do | cat |
    case cat['type']
    when 'group'
      group = cat['name']
    when 'subgroup'
      subgroup = cat['name']
    end
  end
  if group != ''
    Dir.mkdir(group) unless File.exists?(group)
  else
    group = 'Misc'
    Dir.mkdir(group) unless File.exists?(group)
  end
  if subgroup != ''
    Dir.mkdir(group + '/' + subgroup) unless File.exists?(group + '/' + subgroup)
  end
  filename = group + '/' + subgroup + '/' + operation['name'].gsub('/','-').capitalize + '.md'
  File.open(filename, 'w') do |f|
    f.write("###  Description\n")
    f.write(operation['description'] + "\n")
    f.write("###  Options\n")
    f.write("| Label | Description | Type | Required |\n")
    f.write("|---|---|---|---|\n")
    operation['forms'].each do |form|
      if form['category'] == 'reports' || form['category'] == 'execution'
        form['fields'].each do |field|
          f.write("| #{field['label']} | #{field['help']} | #{field['type']} | #{field['required']} |\n")
        end
      end
    end
    f.write("###  Inputs\n")
    f.write("| Label | Description | Multiplicity |\n")
    f.write("|---|---|---|\n")
    operation['ports'].each do |port|
      if port['type'] == "INPUT"
        f.write("| #{port['name'].capitalize} | #{port['description']} | #{port['multiplicity'].capitalize} |\n")
      end
    end
    f.write("###  Outputs\n")
    f.write("| Label | Description | Multiplicity |\n")
    f.write("|---|---|---|\n")
    operation['ports'].each do |port|
      if port['type'] == "OUTPUT"
        f.write("| #{port['name'].capitalize} | #{port['description']} | #{port['multiplicity'].capitalize} |\n")
      end
    end
    f.close()
  end
end
